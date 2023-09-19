const schema = {
  name: "resourcePlaylist",
  title: "Resource Playlist",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "resourses",
      title: "Resourses",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "resource",
            },
          ],
        },
      ],
    },
  ],
};

export default schema;
