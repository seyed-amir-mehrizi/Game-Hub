import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
    const { data, isLoading, error } = useGenre();

    if (isLoading) return <Spinner />
    if (error)  return null;
    return (
        <List>
            {data.map((g) => {
                return <ListItem key={g.id} paddingY={'5px'}>
                    <HStack>
                        <Image boxSize={'32px'} borderRadius={'8px'} src={getCroppedImageUrl(g.image_background)} />
                        <Text fontSize='lg'>
                            {g.name}
                        </Text>
                    </HStack>
                </ListItem>
            })}
        </List>
    )
}

export default GenreList