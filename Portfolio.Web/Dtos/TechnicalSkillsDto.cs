namespace Portfolio.Web.Dtos;

public sealed class TechnicalSkillsDto
{
    public IEnumerable<string> ProgrammingLanguages { get; set; } = [];
    
    public IEnumerable<string> Backend { get; set; } = [];
    
    public IEnumerable<string> Frontend { get; set; } = [];
    
    public IEnumerable<string> Testing { get; set; } = [];
    
    public IEnumerable<string> Database { get; set; } = [];
    
    public IEnumerable<string> VersionControl { get; set; } = [];
    
    public IEnumerable<string> Architecture { get; set; } = [];

    public IEnumerable<string> DesignPatterns { get; set; } = [];
    
    public IEnumerable<string> DesignPrinciples { get; set; } = [];

    public IEnumerable<string> CICD { get; set; } = [];
    
    public IEnumerable<string> Methodologies { get; set; } = [];
    
    public IEnumerable<string> DevelopmentTools { get; set; } = [];
    
    public IEnumerable<string> ProjectManagementTools { get; set; } = [];
    
    public IEnumerable<string> ProductivityTools { get; set; } = [];
    
    public IEnumerable<string> OperatingSystems { get; set; } = [];

    public IEnumerable<string> SoftSkills { get; set; } = [];

    public IEnumerable<string> LanguageSkills { get; set; } = [];
}