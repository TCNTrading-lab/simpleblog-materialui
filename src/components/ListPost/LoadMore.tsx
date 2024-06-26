import { CalculatePrevNextLink } from "@/config/paging-helper";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function LoadMore({
  path,
  page,
  limit,
  next,
  previous,
}: {
  path: string;
  page: number;
  limit: number;
  next: boolean;
  previous: boolean;
}) {
  const classes = "bg-primary text-white hover:text-gray-200 rounded-lg p-1";
  const { nextPath, previousPath } = CalculatePrevNextLink(
    path,
    page,
    next,
    previous,
    limit
  );

  return (
    <div className="flex flex-row flex-wrap justify-center space-x-2">
      {previous ? (
        <Link href={previousPath} className={classes}>
          <FontAwesomeIcon icon={faArrowLeft} width={20} />
        </Link>
      ) : null}
      {next ? (
        <Link href={nextPath} className={classes}>
          <FontAwesomeIcon icon={faArrowRight} width={20} />
        </Link>
      ) : null}
    </div>
  );
}
