using Microsoft.AspNetCore.Components.Web;
using Portfolio.Web.Services;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Portfolio.Web.Components;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(_ => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

builder.Services.AddScoped<IDataService, DataService>();

await builder.Build().RunAsync();