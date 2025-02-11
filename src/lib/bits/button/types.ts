import type { Builder } from "$lib/internal/index.js";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

type Builders = {
	builders?: Builder[];
};

interface AnchorElement extends Builders, HTMLAnchorAttributes {
	href?: HTMLAnchorAttributes["href"];
	type?: never;
}

interface ButtonElement extends Builders, HTMLButtonAttributes {
	type?: HTMLButtonAttributes["type"];
	href?: never;
}

type Props = AnchorElement | ButtonElement;

type ButtonEventHandler<T extends Event = Event> = T & {
	currentTarget: EventTarget & HTMLButtonElement;
};

type Events = {
	click: ButtonEventHandler<MouseEvent>;
	keydown: ButtonEventHandler<KeyboardEvent>;
	change: ButtonEventHandler<Event>;
	keyup: ButtonEventHandler<KeyboardEvent>;
	mouseenter: ButtonEventHandler<MouseEvent>;
	mouseleave: ButtonEventHandler<MouseEvent>;
};

export type {
	Props,
	//
	Props as ButtonProps,
	//
	Events,
	//
	Events as ButtonEvents,
	//
	ButtonEventHandler
};
