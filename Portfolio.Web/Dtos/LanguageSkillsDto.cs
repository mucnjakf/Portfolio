namespace Portfolio.Web.Dtos;

public sealed class LanguageSkillsDto
{
    public string MotherTongue { get; set; } = default!;

    public IEnumerable<LanguageDto> Languages { get; set; } = [];
}