namespace Portfolio.Web.Dtos;

public sealed class TechnicalSkillsDto
{
    public IList<SkillDto> Skills { get; set; } = [];

    public IEnumerable<string> Architecture { get; set; } = [];
    
    public IEnumerable<string> Pattern { get; set; } = [];
    
    public IEnumerable<string> Methodology { get; set; } = [];
    
    public IEnumerable<string> Other { get; set; } = [];
}

public sealed class SkillDto
{
    public string Src { get; set; } = default!;

    public string Alt { get; set; } = default!;

    public string Text { get; set; } = default!;
}