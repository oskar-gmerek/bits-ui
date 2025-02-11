import {
	createDialog,
	type Dialog as AlertDialogReturn,
	type CreateDialogProps as CreateAlertDialogProps
} from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";
import {
	getOptionUpdater,
	removeUndefined,
	type TOpen,
	type TransitionTimesProp
} from "$lib/internal/index.js";

const NAME = "AlertDialog";

type SetProps = CreateAlertDialogProps & TransitionTimesProp & TOpen;

type GetReturn = AlertDialogReturn & TransitionTimesProp & TOpen;

function set(props: SetProps) {
	const alertDialog = createDialog({
		...removeUndefined(props),
		role: "alertdialog"
	});
	setContext(NAME, {
		...alertDialog,
		transitionTimes: props.transitionTimes,
		tOpen: props.tOpen
	});
	return {
		...alertDialog,
		updateOption: getOptionUpdater(alertDialog.options)
	};
}

function get() {
	return getContext<GetReturn>(NAME);
}

export const ctx = {
	set: set,
	get: get
};
