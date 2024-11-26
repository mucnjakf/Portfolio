namespace Portfolio.Web.Dtos;

public sealed class ExperienceDto
{
    public string Position { get; set; } = default!;

    public string Date { get; set; } = default!;

    public string Company { get; set; } = default!;

    public string CompanyLocation { get; set; } = default!;

    public string Logo { get; set; } = default!;

    public IList<ProjectDto> Projects { get; set; } = [];
}