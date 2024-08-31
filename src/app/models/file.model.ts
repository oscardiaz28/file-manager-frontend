export interface File {
    createdAt: string;
    createdBy: {
      email: string;
      id: number;
      username: string;
    };
    deletedBy: string | null;
    deleted_at: string | null;
    id: number;
    is_folder: boolean;
    name: string;
    parent: any | null; // Ajusta el tipo según tu estructura
    path: string;
    size: number | null;
}

