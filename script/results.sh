#!/bin/bash

# TRAVIS: cd /home/travis/build/estefafdez/cypress-template/mochawesome-report
cd /home/runner/work/cypress-template/cypress-template/mochawesome-report

TEST=`cat Final_Report.json | jq ".stats.tests"`
PASSES=`cat Final_Report.json | jq ".stats.passes"`
FAILURES=`cat Final_Report.json | jq ".stats.failures"`
SKIP=`cat Final_Report.json | jq ".stats.skipped"`
PENDING=`cat Final_Report.json | jq ".stats.pending"`
TOTAL_SKIPPED=$((SKIP+PENDING))

echo "Tests: $TEST | ✔: $PASSES | ✖: $FAILURES | Skipped: $TOTAL_SKIPPED"

 
