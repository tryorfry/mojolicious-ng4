package MojoNg4;
use Mojo::Base 'Mojolicious';
use Mojo::SQLite;

# This method will run once at server start
sub startup {
  my $self = shift;

  # Load configuration from hash returned by "my_app.conf"
  my $config = $self->plugin('Config');
  $self->plugin('PODRenderer') if $config->{perldoc};

  if (my $secrets = $self->config->{secrets}) {
      $self->secrets($secrets);
  }


  $self->hook(
      before_dispatch => sub {
          my $c = shift;
          $c->res->headers->header('Access-Control-Allow-Origin' => '*');
      }
  );

  $self->helper( dbh => sub {state $dbh = Mojo::SQLite->new('sqlite:db/mojo-ng.db') });
  $self->plugin(Minion => {SQLite => $self->dbh});
  $self->plugin('Minion::Admin');

  push @{$self->static->paths} => '/Users/Sachin/workspace/project/mojo_ng4/public/Demo';
  # Router
  my $r = $self->routes;
  $r->get('/Demo/hello')->to('Demo#hello');

  # Normal route to controller
  #$r->get('/Demo/index.html')->to('Demo#index');
  #$r->get('/Demo')->to('Demo#index');

}

1;
