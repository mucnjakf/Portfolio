using System.Text.Json;
using Portfolio.Web.Dtos;

namespace Portfolio.Web.Services;

public sealed class DataService : IDataService
{
    private const string Path = "wwwroot/data";

    public async Task<T> ParseJsonAsync<T>(string page)
    {
        string json = await File.ReadAllTextAsync($"{Path}/{page}.json");
        
        return JsonSerializer.Deserialize<T>(json)!;
    }
}