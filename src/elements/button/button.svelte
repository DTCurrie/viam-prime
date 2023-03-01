<svelte:options immutable tag="v-button-internal" />

<script lang="ts">
  // Added temporarily because <svelte:element> does not recognize "text" as a valid prop
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-nocheck

  type Variants =
    | "primary"
    // TODO: Remove deprecated inverse-primary
    | "inverse-primary"
    | "outline-primary"
    | "danger"
    | "outline-danger"
    | "success"
    | "outline-success"
    | "icon"
    | "icon-danger"
    | "icon-success";

  import cx from "classnames";
  import { get_current_component } from "svelte/internal";
  import { htmlToBoolean } from "../../lib/boolean";
  import { addStyles } from "../../lib/index";

  export let disabled = "false";
  export let type: "button" | "submit" | "reset" = "button";
  export let variant: Variants = "primary";
  export let label = "";
  export let title = "";
  export let icon = "";
  export let size = "base";
  export let tooltip = "";

  addStyles();

  let isDisabled: boolean;

  $: isDisabled = htmlToBoolean(disabled, "disabled");
  $: isIconVariant = variant.includes("icon");

  // @TODO switch to <svelte:this bind:this={component}> https://github.com/sveltejs/rfcs/pull/58
  const component = get_current_component() as HTMLElement & {
    internals: ElementInternals;
  };

  const internals = component.attachInternals();

  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    const { form } = internals;

    if (form?.requestSubmit) {
      form.requestSubmit();
    } else {
      form?.submit();
    }
  };

  const handleParentClick = (event: PointerEvent) => {
    event.stopImmediatePropagation();
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
  this={tooltip ? "v-tooltip" : "span"}
  text={tooltip}
  on:click={isDisabled ? handleParentClick : undefined}
>
  <button
    {type}
    aria-label={variant === "icon" ? label : undefined}
    aria-disabled={isDisabled ? true : undefined}
    {title}
    class={cx(
      "will-change-transform hover:scale-105 motion-safe:transition-transform",
      {
        "inline-flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs border":
          !isIconVariant,
        "cursor-not-allowed !opacity-50": isDisabled,
        "bg-black border-black text-white":
          // TODO: Remove deprecated inverse-primary
          variant === "primary" || variant === "inverse-primary",
        "bg-white border-black text-black": variant === "outline-primary",
        "bg-red/90 text-white border-red/90": variant === "danger",
        "bg-white border-red/90 text-red/90": variant === "outline-danger",
        "bg-green/90 border-green/90 text-white": variant === "success",
        "bg-white border-green/90 text-green/90": variant === "outline-success",
      }
    )}
    on:click={handleClick}
  >
    {#if icon}
      <i
        aria-hidden="true"
        class={cx(`icon-${icon} text-${size}`, {
          "text-black": variant === "icon",
          "text-red/90": variant === "icon-danger",
          "text-green/90": variant === "icon-success",
        })}
      />
    {/if}

    {#if !isIconVariant}
      <span class="mx-auto">
        {label}
      </span>
    {/if}
  </button>
</svelte:element>

<style>
  :host {
    display: inline-block !important;
  }
</style>
