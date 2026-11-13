using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(cliente_padron.Startup))]
namespace cliente_padron
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
