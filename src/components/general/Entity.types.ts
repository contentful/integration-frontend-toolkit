export interface Entity {
    entityType: string;
    title: string;
    description: string;
    thumbnail?: string;
}

export interface ListCard {
    className?: string,
    loading?: boolean,
    withDragHandle?: boolean,
    isSelected?: boolean,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const SELECT_TYPE = {
    MULTIPLE: 'multiple',
    SINGLE: 'single'
}