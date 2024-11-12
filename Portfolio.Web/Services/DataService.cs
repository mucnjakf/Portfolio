using System.Text.Json;
using Portfolio.Web.Dtos;

namespace Portfolio.Web.Services;

public sealed class DataService : IDataService
{
    private const string Path = "wwwroot/data";

    public async Task<AboutMeDto> GetAboutMeAsync()
    {
        string json = await File.ReadAllTextAsync($"{Path}/aboutMe.json");

        return JsonSerializer.Deserialize<AboutMeDto>(json)!;
    }
}