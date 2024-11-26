namespace Portfolio.Web.Dtos;

public sealed class ProjectDto
{
    public string Name { get; set; } = default!;

    public string Image { get; set; } = default!;

    public string Description { get; set; } = default!;

    public IEnumerable<string> TechStack { get; set; } = [];

    public string Link { get; set; } = default!;
}