package app

import "time"

func timeNow() time.Time {
	return time.Now().In(time.UTC)
}
