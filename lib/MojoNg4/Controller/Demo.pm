package MojoNg4::Controller::Demo;

use Mojo::Base 'Mojolicious::Controller';

# This action will render a template
sub index {
  my $self = shift;

  # render demo app index page. rest of the routes will be taken care by
  # angular4
  $self->reply->static('Demo/index.html');
}

sub hello {
    my $self = shift;
    return $self->render(
        json =>
            [
                {
                    name=> 'Frock',
                    price=> '$60',
                    imgUrl=> 'assets/images/frock.jpg',
                    text=> 'Cotton Frock'
                },
                {
                    name=> 'Tank Tee',
                    price=> '$70',
                    imgUrl=> 'assets/images/tanktee.jpg',
                    text=> 'Cotton tank'
                }
            ]
        );

}

1;
