namespace Portfolio.Web.Dtos;

public sealed class OtherSkillsDto
{
    public IEnumerable<string> SoftSkills { get; set; } = [];
    
    public string MotherTongue { get; set; } = default!;

    public IEnumerable<LanguageDto> Languages { get; set; } = [];
}

public sealed class LanguageDto
{
    public string Name { get; set; } = default!;
    
    public string Listening { get; set; } = default!;
    
    public string Reading { get; set; } = default!;
    
    public string SpokenProduction { get; set; } = default!;
    
    public string SpokenInteraction { get; set; } = default!;
    
    public string Writing { get; set; } = default!;
}