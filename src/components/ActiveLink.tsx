import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import React, { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExceptHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExceptHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const shouldMatchExceptHrefActive =
    shouldMatchExceptHref && (asPath === rest.href || asPath === rest.as);

  const shouldNotMatchExceptHrefActive =
    !shouldMatchExceptHref &&
    (asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.as)));

  let isActive = shouldMatchExceptHrefActive || shouldNotMatchExceptHrefActive;

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
