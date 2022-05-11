enum POST_TYPES {
  NORMAL = "NORMAL",
  EVENT = "EVENT"
}

export default class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private type: POST_TYPES,
    private created_at: Date,
    private authorId: string
  ) { }

  getIdPost = (): string => this.id;
  getPhoto = (): string => this.photo;
  getDescription = (): string => this.description;
  getType = (): POST_TYPES => this.type;
  getCreated_at = (): Date => this.created_at;
  getAuthorId = (): string => this.authorId;
}