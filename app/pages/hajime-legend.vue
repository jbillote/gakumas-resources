<script setup lang="ts">
import ExamStatChart from '@/components/ExamStatChart.vue'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { VisAxis, VisGroupedBar, VisXYContainer } from '@unovis/vue'

const xLabels = ['Vo', 'Da', 'Vi']
const x = (d, i) => i
const xTicks = xLabels.map((_, i) => i)
const xTickFormat = (i) => xLabels[i]

const midterms = [
  {
    nijuumaru: 460,
    maru: 415,
    sankaku: 369,
  },
  {
    nijuumaru: 359,
    maru: 324,
    sankaku: 288,
  },
  {
    nijuumaru: 618,
    maru: 557,
    sankaku: 495,
  },
]

const finals = [
  {
    nijuumaru: 1510,
    maru: 1361,
    sankaku: 1211,
  },
  {
    nijuumaru: 1179,
    maru: 1063,
    sankaku: 946,
  },
  {
    nijuumaru: 2028,
    maru: 1828,
    sankaku: 1627,
  },
]

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
</script>

<template>
  <div>
    <div class="text-bold text-center text-4xl">初レジェンド</div>
    <div class="text-semibold text-center text-2xl">Exam Caps</div>
    <div class="flex">
      <div class="flex w-1/2 flex-col p-2">
        <Table class="text-center">
          <TableCaption>Midterms</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="text-center">Score</TableHead>
              <TableHead class="text-center">Rating per Score</TableHead>
              <TableHead class="text-center">Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>30,000</TableCell>
              <TableCell />
              <TableCell>2400</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>30,000 - 40,0000</TableCell>
              <TableCell>0.008</TableCell>
              <TableCell>2400 - 2480</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>40,000 - 50,000</TableCell>
              <TableCell>0.003</TableCell>
              <TableCell>2480 - 2510</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>50,000 - 60,000</TableCell>
              <TableCell>0.002</TableCell>
              <TableCell>2510 - 2530</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>60,000 - 200,000</TableCell>
              <TableCell>0.001</TableCell>
              <TableCell>2530 - 2670</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div class="mt-auto text-center">SSS+ Target: 40,000</div>
      </div>
      <div class="flex w-1/2 flex-col p-2">
        <Table class="text-center">
          <TableCaption>Finals</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="text-center">Score</TableHead>
              <TableHead class="text-center">Rating per Score</TableHead>
              <TableHead class="text-center">Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>400,000</TableCell>
              <TableCell />
              <TableCell>2400</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>400,000 - 500,000</TableCell>
              <TableCell>0.01</TableCell>
              <TableCell>7200 - 8200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>500,000 - 600,000</TableCell>
              <TableCell>0.008</TableCell>
              <TableCell>8200 - 9000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>600,000 - 2,000,000</TableCell>
              <TableCell>0.001</TableCell>
              <TableCell>9000 - 10,400</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div class="mt-auto text-center">SSS+ Target: 600,000</div>
      </div>
    </div>
    <div class="text-semibold text-center text-2xl">Exam Stat Thresholds</div>
    <div class="flex">
      <div class="flex w-1/2 flex-col p-2">
        <ExamStatChart :stats="midterms" />
        <div class="text-center">Midterms</div>
      </div>
      <div class="flex w-1/2 flex-col p-2">
        <ExamStatChart :stats="finals" />
        <div class="text-center">Finals</div>
      </div>
    </div>
  </div>
</template>
