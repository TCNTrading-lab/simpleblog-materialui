import { getApi2 } from "@/config/api-helper";

import Link from "next/link";
import { Badge } from "flowbite-react";
import { GrayBox, WhiteBox } from "../Container/Box";

export default function LeftBar() {
  return (
    <WhiteBox>
      <div>
        <Tags />
      </div>
      <div>
        <Categories />
      </div>
    </WhiteBox>
  );
}

async function Tags() {
  if (!isClientSide()) {
    const { data } = await getApi2("api/blog/tags");

    return (
      <GrayBox title="Tags">
        <div className={"flex flex-row flex-wrap "}>
          {data.map((tag: any, i: number) => (
            <Badge color="red" key={i} className="w-fit mt-1 mr-2 min-w-fit">
              <Link href={`/tag/${tag.slug}`} className="hover:bg-bg-hover">
                {`${tag.name} (${tag.count})`}
              </Link>
            </Badge>
          ))}
        </div>
      </GrayBox>
    );
  }
}

async function Categories() {
  if (!isClientSide()) {
    const { data } = await getApi2("api/blog/categories");
    return (
      <GrayBox title="Categories">
        {data.map((category: any, i: number) => (
          <WhiteBox hoverable={true} key={i}>
            <Link href={`/${category.slug}`} className="p-1 flex flex-row">
              <div className="rounded-full w-6 h-6 bg-primary mr-2"></div>
              <div>{category.name}</div>
            </Link>
          </WhiteBox>
        ))}
      </GrayBox>
    );
  }
}

export function isClientSide() {
  return typeof window !== "undefined";
}
