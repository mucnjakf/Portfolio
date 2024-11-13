namespace Portfolio.Web.Dtos;

public sealed class SchoolDto
{
    public string Title { get; set; } = default!;

    public string Date { get; set; } = default!;

    public string SchoolName { get; set; } = default!;

    public string Location { get; set; } = default!;

    public List<string> Subjects { get; set; } = [];
}