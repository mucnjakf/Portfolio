using System.Net.Http.Json;

namespace Portfolio.Web.Services;

public sealed class DataService(HttpClient httpClient) : IDataService
{
    public async Task<T> ParseJsonAsync<T>(string page)
        => await httpClient.GetFromJsonAsync<T>($"data/{page}.json") ??
           throw new InvalidOperationException($"Failed to load {page}.json");
}