import { Query } from "@nestjs/common";
import { Args, Parent, ResolveField, Resolver } from "@nestjs/graphql";

@Resolver("Author")
export class AuthorsResolver {
    constructor(
        private authorsService: AuthorsService,
        private postsService: PostsService,
    ){}

    @Query("author")
    async getAuthors(@Args("id") id: number): Promise<any>{
        return this.authorsService.findOneById(id);
    }

    @ResolveField("posts")
    async getPosts(@Parent() author){
        const { id } = author;
        return this.postsService.findAll({authorId: id});
    }}