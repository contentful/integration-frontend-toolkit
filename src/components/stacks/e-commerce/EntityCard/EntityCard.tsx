import { EntryCard, Card } from '@contentful/f36-components';
import { styles } from './EntityCard.styles';

export interface Props {
    title?: string,
    description?: string,
    contentType: string,
    loading?: boolean;
}

const EntityCard = (props: Props) => {
    const { title, description, contentType, loading } = props;
    return (
        <div className={styles.root}>
            <EntryCard contentType={contentType}
                title={title}
                description={description}
                isLoading={loading} />
        </div>
    );
}

export default EntityCard;