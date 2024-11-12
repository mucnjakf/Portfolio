using Portfolio.Web.Dtos;

namespace Portfolio.Web.Services;

public interface IDataService
{
    Task<AboutMeDto> GetAboutMeAsync();
}