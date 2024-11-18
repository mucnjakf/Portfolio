namespace Portfolio.Web.Dtos;

public sealed class WorkExperienceDto
{
    public string Position { get; set; } = default!;

    public string Date { get; set; } = default!;

    public string Company { get; set; } = default!;

    public string CompanyLocation { get; set; } = default!;

    public string Logo { get; set; } = default!;

    public IList<ProjectDto> Projects { get; set; } = [];
}

public sealed class ProjectDto
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public string Name { get; set; } = default!;

    public string Description { get; set; } = default!;

    public IEnumerable<string> TechStack { get; set; } = [];
}