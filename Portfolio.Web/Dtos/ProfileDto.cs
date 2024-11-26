namespace Portfolio.Web.Dtos;

public sealed class ProfileDto
{
    public string ProfileImage { get; init; } = default!;

    public string Name { get; init; } = default!;

    public string Description { get; init; } = default!;

    public string Professional { get; init; } = default!;

    public string Education { get; init; } = default!;

    public string Gender { get; init; } = default!;

    public string DateOfBirth { get; init; } = default!;

    public string Location { get; init; } = default!;

    public string Email { get; init; } = default!;

    public string GitHub { get; init; } = default!;

    public string MyStory { get; init; } = default!;
}