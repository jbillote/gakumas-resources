<script setup lang="ts">
import type { ChartConfig } from '@/components/ui/chart'
import {
  ChartContainer,
  ChartCrosshair,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from '@/components/ui/chart'
import { Spinner } from '@/components/ui/spinner'
import type { Stat } from '@/types/stat'
import { VisAxis, VisGroupedBar, VisXYContainer } from '@unovis/vue'

const xLabels = ['Vo', 'Da', 'Vi']
const x = (_: any, i: number) => i
const xTicks = xLabels.map((_, i) => i)
const xTickFormat = (i: number) => xLabels[i]

const chartConfig = {
  nijuumaru: {
    label: '◎',
    color: 'var(--chart-1)',
  },
  maru: {
    label: '〇',
    color: 'var(--chart-2)',
  },
  sankaku: {
    label: '△',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig

defineProps<{
  stats: [Stat, Stat, Stat] | undefined
}>()
</script>

<template>
  <div v-if="stats == undefined">
    <Spinner class="size-4" />
  </div>
  <div v-else>
  <ChartContainer :config="chartConfig">
    <VisXYContainer :data="stats" :y-domain="[0, undefined]">
      <VisGroupedBar
        :x="x"
        :y="[(d: Stat) => d.nijuumaru, (d: Stat) => d.maru, (d: Stat) => d.sankaku]"
        :color="[chartConfig.nijuumaru.color, chartConfig.maru.color, chartConfig.sankaku.color]"
        :rounded-corners="4"
      />
      <VisAxis type="x" :tick-values="xTicks" :tick-format="xTickFormat" />
      <VisAxis type="y" />

      <ChartTooltip />
      <ChartCrosshair
        :template="
          componentToString(chartConfig, ChartTooltipContent, {
            labelFormatter(d) {
              return xLabels[d as number] as string
            },
          })
        "
        :color="[chartConfig.nijuumaru.color, chartConfig.maru.color, chartConfig.sankaku.color]"
      />
    </VisXYContainer>
  </ChartContainer>
  </div>
</template>
