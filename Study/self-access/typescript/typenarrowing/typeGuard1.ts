// 타입 좁히기
// 명시적인 타입 추론 가능  &  타입 안정성 향상

interface Range {
  start: Date;
  end: Date;
}

interface DatePickerProps {
  selectedDates?: Date | Range;
}

const DatePicker = ({ selectedDates }: DatePickerProps) => {
  return selectedDates instanceof Date;
};

const ex: DatePickerProps = {
  selectedDates: {
    start: new Date(),
    end: new Date(),
  },
};

console.log(DatePicker(ex));
