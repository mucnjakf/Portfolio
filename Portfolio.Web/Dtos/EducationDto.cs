namespace Portfolio.Web.Dtos;

public sealed class EducationDto
{
    public List<SchoolDto> Schools { get; set; } = [];

    public List<string> Certifications { get; set; } = [];
}

public sealed class SchoolDto
{
    public string Title { get; set; } = default!;

    public string Date { get; set; } = default!;

    public string Name { get; set; } = default!;

    public string Location { get; set; } = default!;

    public string Logo { get; set; } = default!;

    public string Description { get; set; } = default!;

    public List<string> Subjects { get; set; } = [];
}