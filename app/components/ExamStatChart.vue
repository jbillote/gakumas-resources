<script setup lang="ts">
import type { ChartConfig } from '@/components/ui/chart'
import {
  ChartContainer,
  ChartCrosshair,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from '@/components/ui/chart'
import type { Stat } from '@/types/stat'
import { VisAxis, VisGroupedBar, VisXYContainer } from '@unovis/vue'

const xLabels = ['Vo', 'Da', 'Vi']
const x = (d, i) => i
const xTicks = xLabels.map((_, i) => i)
const xTickFormat = (i) => xLabels[i]

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
  stats: [Stat, Stat, Stat]
}>()
</script>

<template>
  <ChartContainer :config="chartConfig">
    <VisXYContainer :data="stats" :y-domain="[0, undefined]">
      <VisGroupedBar
        :x="x"
        :y="[(d) => d.nijuumaru, (d) => d.maru, (d) => d.sankaku]"
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
              return xLabels[d]
            },
          })
        "
        :color="[chartConfig.nijuumaru.color, chartConfig.maru.color, chartConfig.sankaku.color]"
      />
    </VisXYContainer>
  </ChartContainer>
</template>
