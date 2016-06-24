using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AureliaSetup.Startup))]
namespace AureliaSetup
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
