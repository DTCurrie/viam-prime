<script lang="ts">
import type cx from 'classnames';
import { Label, type LabelPosition } from '$lib';

export let position: LabelPosition = 'top';
export let disabled = false;
export let required = false;
export let detail = '';
export let extraClasses: cx.Argument = '';
</script>

<Label
  {position}
  {disabled}
  {required}
  {detail}
  cx={extraClasses}
>
  Name:
  <input
    slot="input"
    name="name"
    placeholder="Enter your name"
    {disabled}
    {required}
  />
</Label>
