import Image from "next/image";
import { Container } from "../container";
import { CurrencyMenu } from "../currency";
import { LanguageMenu } from "../language";

function Topbar() {
    return (
        <section className="max-lg:hidden w-full bg-gradient-to-l to-90% to-typo-primary/80 from-typo-primary min-h-[50px] py-[10px]">
            <Container>
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {Array(4)
                            .fill(0)
                            .map((_, index) => {
                                const key = `social-${index}`;
                                return (
                                    <Image key={key} src="/assets/icons/fb.svg" alt="facebook" width={24} height={24} />
                                );
                            })}
                    </div>
                    <div className="flex items-center gap-2">
                        <LanguageMenu />
                        <CurrencyMenu />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Topbar;
