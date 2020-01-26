using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using SodaVendingMachine.Models;
using System.Configuration;
using System.Data.SqlClient;

namespace SodaVendingMachine
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            //var connectionString = ConfigurationManager.ConnectionStrings["SodaVendingMachineContext"].ToString();
            //services.AddDbContext<SodaVendingMachineContext>(options => options.UseSqlServer(connectionString));

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}  