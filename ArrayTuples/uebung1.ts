// UEBUNG 1

function sum(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}


// UEBUNG 2

function sum2(items: Array<string | number>): string {
    return items.join('');
}

// UEBUNG 4
function getArrayLength<T>(arr: T[]): number {
    return arr.length;
}

// UEBUNG 5

function getLastItem<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[arr.length - 1];
}

// UEBUNG 6

function getLastItem2<T>(input: T | T[]): T | undefined {
    if (Array.isArray(input)) {
        if (input.length === 0) {
            return undefined;
        }
        return input[input.length - 1];
    } else {
        return input;
    }
}

// UEBUNG 7

function getRange<T>(arr: T[], start: number, end: number): T | T[] | undefined {
    if (start < 0 || end >= arr.length || start > end) {
        return undefined;
    }
    const range = arr.slice(start, end + 1);
    return range.length === 1 ? range[0] : range;
}

getRange([1, 2, 3, 4, 5, 6], 0, 2)
getRange([1, 2, 3, 4, 5, 6], 0, 0)




// TUPLES //

//UEBUNG 1

type NameBirthday = [string, Date];
type NameBirthday2 = [string, number];

// UEBUNG 2

function daysUntil(birthday: NameBirthday): number {
    const today = new Date();
    const [name, birthdate] = birthday;
    const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (nextBirthday.getTime() < today.getTime()) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const diffTime = nextBirthday.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}


// UEBUNG 3

const birthdayList = (param: NameBirthday[]) => {
    const output: NameBirthday2[] = param.map(person => {
        const t: NameBirthday2 = [person[0], daysUntil(person)]
        return t
    })

    return output.sort((a: [string, number], b: [string, number]) => a[1] - b[1])
}

// UEBUNG 4

function nextBirthday(param: NameBirthday[]): string {
    return birthdayList(param)[0][0]
}

nextBirthday([['Marius-Black-Muller', new Date('2001-07-19')], ['Yusuf', new Date('1993-09-14')]])
