import { EntryCard, Card } from '@contentful/f36-components';
import { styles } from './EntityCard.styles';
import Placeholder from './assets/placeholder.png';

export interface Props {
    title?: string,
    description?: string,
    contentType: string,
    loading?: boolean;
    thumbnail?: string;
}

const EntityCard = (props: Props) => {
    const { title, description, contentType, loading, thumbnail } = props;
    return (
        <div className={styles.root}>
            <EntryCard contentType={contentType}
                title={title}
                description={description}
                isLoading={loading}
                thumbnailElement={<img alt="Thumbnail" src={thumbnail || Placeholder} />} />
        </div>
    );
}

export default EntityCard;