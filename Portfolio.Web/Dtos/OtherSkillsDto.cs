namespace Portfolio.Web.Dtos;

public sealed class OtherSkillsDto
{
    public IEnumerable<string> SoftSkills { get; set; } = [];
    
    public string MotherTongue { get; set; } = default!;

    public IEnumerable<LanguageDto> Languages { get; set; } = [];
}