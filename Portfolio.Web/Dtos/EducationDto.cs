namespace Portfolio.Web.Dtos;

public sealed class EducationDto
{
    public List<SchoolDto> Schools { get; set; } = [];

    public List<string> Certifications { get; set; } = [];
}