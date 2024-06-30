import React, { HTMLProps } from "react";

/**
 * Render the toolbar with the navigation button.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Nav(props: HTMLProps<HTMLDivElement>) {
  return <div {...props} />;
}

export type NavProps = Parameters<typeof Nav>[0];
