# Managing LionHealth Website Content

This folder contains all the content for the LionHealth website in simple JSON format. You can easily update team members, projects, and other information without touching any code!

## Files Overview

### `people.json` - Team Members
Contains all team member information displayed on the People page.

### `projects.json` - Current Projects
Contains all active/current projects shown on the Projects page.

### `past-projects.json` - Past Projects
Contains all completed/past projects shown on the Projects page.

### `home-projects.json` - Home Page Projects
Contains the project summaries shown on the homepage.

---

## How to Edit

### Adding or Updating Team Members (`people.json`)

Each team member entry follows this format:

```json
{
  "title": "Software Engineering Lead",
  "leads": [
    {
      "name": "John Doe",
      "imageUrl": "/assets/headshots/John.jpg",
      "description": "Computer Science | SEAS '26"
    }
  ]
}
```

**Tips:**
- To add a new person, add a new object inside the `leads` array
- To add a new role/section, create a new object with a `title` and `leads` array
- Image paths should start with `/assets/headshots/`
- Place the actual image file in the `public/assets/headshots/` folder
- Make sure the image filename matches exactly what you put in `imageUrl`

### Adding or Updating Projects (`projects.json` or `past-projects.json`)

Each project entry follows this format:

```json
{
  "title": "SOFTWARE TEAM",
  "year": "Fall 2025-Present",
  "projectName": "Project Name",
  "description": "Brief description of the project",
  "purpose": "What problem this project solves",
  "aims": [
    "First aim/objective",
    "Second aim/objective",
    "Third aim/objective"
  ],
  "goals": {
    "shortTerm": "Short-term goals",
    "longTerm": "Long-term goals"
  },
  "progress": "Current progress status",
  "nextSteps": "What's coming next",
  "link": "https://optional-link-to-repository.com"
}
```

**Tips:**
- The `goals` field is optional - you can omit it if not needed
- The `link` field is optional - only include if there's a repository or related URL
- Each aim in the `aims` array should be a separate bullet point
- To move a project from current to past, copy it from `projects.json` to `past-projects.json`

### Editing Home Page Projects (`home-projects.json`)

Each entry is simpler:

```json
{
  "title": "Software Team",
  "description": "Brief description shown on home page",
  "imageText": "Software Team"
}
```

---

## Important Notes

### Image Files
- When adding new team member photos, place the image file in: `public/assets/headshots/`
- Make sure the filename matches the `imageUrl` in the JSON (case-sensitive)
- Recommended image size: 500x500 pixels for best quality
- Supported formats: JPG, PNG


