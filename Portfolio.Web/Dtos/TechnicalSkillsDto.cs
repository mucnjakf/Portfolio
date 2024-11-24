using System.Collections;

namespace Portfolio.Web.Dtos;

public sealed class TechnicalSkillsDto
{
    public IList<string> Skills { get; set; } = [];

    public IEnumerable<string> ProgrammingLanguages { get; set; } = [];

    public IEnumerable<string> Architecture { get; set; } = [];

    public IEnumerable<string> Pattern { get; set; } = [];

    public IEnumerable<string> Methodology { get; set; } = [];

    public IEnumerable<string> Other { get; set; } = [];
}