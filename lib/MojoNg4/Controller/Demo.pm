package MojoNg4::Controller::Demo;

use Mojo::Base 'Mojolicious::Controller';

# This action will render a template
sub index {
  my $self = shift;

  # render demo app index page. rest of the routes will be taken care by
  # angular4
  $self->reply->static('Demo/index.html');
}

1;
