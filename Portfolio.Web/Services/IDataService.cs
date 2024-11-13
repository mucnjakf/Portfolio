using Portfolio.Web.Dtos;

namespace Portfolio.Web.Services;

public interface IDataService
{
    Task<T> ParseJsonAsync<T>(string page);
}