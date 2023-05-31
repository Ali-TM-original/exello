interface Board{
    columns: Map<TypedColumn, Column>

}

type TypedColumn = "todo"|"inprogress"|"done"

interface Column{
    id: TypedColumn;
    todos: Todo[];
}

interface Todo extends Models.Document{
    $id: string;
    $createdAt: string;
    status: TypedColumn;
    title: string;
    image?: Image;
}

interface Image{
    bucketId: string;
    fileId: string;
}