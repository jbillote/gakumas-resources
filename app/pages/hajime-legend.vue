<script setup lang="ts">
import CharacterDropdown from '@/components/CharacterDropdown.vue'
import ExamStatChart from '@/components/ExamStatChart.vue'
import { NumberField, NumberFieldContent, NumberFieldInput } from '@/components/ui/number-field'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { characterStats } from '@/data/hajime-legend'

const selectedCharacter = ref('jsna')
const chartData = computed(() => characterStats[selectedCharacter.value])

const vo = ref(0)
const da = ref(0)
const vi = ref(0)
const midtermScore = ref(0)
const ratingScores = computed(() => {
  if (vo.value > 0 && da.value > 0 && vi.value > 0 && midtermScore.value > 0) {
    return calculateCurrentRating(vo.value, da.value, vi.value, midtermScore.value)
  }

  return {}
})
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
    <div class="flex justify-center p-2">
      <CharacterDropdown v-model="selectedCharacter" />
    </div>
    <div class="flex">
      <div class="flex w-1/2 flex-col p-2">
        <ExamStatChart :stats="chartData?.midterms" />
        <div class="text-center">Midterms</div>
      </div>
      <div class="flex w-1/2 flex-col p-2">
        <ExamStatChart :stats="chartData?.finals" />
        <div class="text-center">Finals</div>
      </div>
    </div>
    <div class="flex justify-center p-2">
      <div class="w-1/3 text-center">
        <div class="text-semibold text-2xl">Rating Calculator</div>
        <div class="flex">
          <div class="flex w-1/3 flex-col py-2 pe-1">
            <NumberField v-model="vo">
              <NumberFieldContent>
                <NumberFieldInput />
              </NumberFieldContent>
            </NumberField>
          </div>
          <div class="flex w-1/3 flex-col px-1 py-2">
            <NumberField v-model="da">
              <NumberFieldContent>
                <NumberFieldInput />
              </NumberFieldContent>
            </NumberField>
          </div>
          <div class="flex w-1/3 flex-col py-2 ps-1">
            <NumberField v-model="vi">
              <NumberFieldContent>
                <NumberFieldInput />
              </NumberFieldContent>
            </NumberField>
          </div>
        </div>
        <div class="flex py-2">
          <NumberField v-model="midtermScore" class="w-full">
            <NumberFieldContent>
              <NumberFieldInput />
            </NumberFieldContent>
          </NumberField>
        </div>
        <div class="flex py-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rating</TableHead>
                <TableHead>Required Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>S4</TableCell>
                <TableCell>{{ ratingScores['S4'] }}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SSS+</TableCell>
                <TableCell>{{ ratingScores['SSS+'] }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  </div>
</template>
