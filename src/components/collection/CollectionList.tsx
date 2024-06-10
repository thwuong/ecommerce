import { CardImageSingle } from "../card";
import { Container } from "../container";

function CollectionList() {
    return (
        <section className="w-full py-[100px] max-lg:py-10">
            <Container>
                <div className="grid grid-cols-3 w-full gap-[2px]">
                    {Array(3)
                        .fill(3)
                        .map((_, index) => {
                            const key = `collcetion-${index}`;
                            return <CardImageSingle key={key} {..._} />;
                        })}
                </div>
            </Container>
        </section>
    );
}

export default CollectionList;
