function makeArrayConsecutive2(statues) {
return Math.max.apply(Math, statues) - Math.min.apply(Math, statues) - statues.length + 1;
}
