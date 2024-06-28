import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler
} from "react";

import { format } from "date-fns/format";
import { DayPickerProps } from "react-day-picker";

import { UI, CalendarFlag, DayFlag } from "../UI.js";
import type { CalendarDay } from "../classes/index.js";
import {
  useCalendar,
  useFocus,
  useModifiers,
  useProps
} from "../contexts/index.js";
import { getClassNamesForModifiers } from "../helpers/getClassNamesForModifiers.js";
import { getStyleForModifiers } from "../helpers/getStyleForModifiers.js";
import { useMulti, useRange, useSingle } from "../selection/index.js";

/**
 * Render the DayPicker Calendar with navigation and the month grids.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Calendar(initialProps: DayPickerProps) {
  const props = useProps(initialProps);
  const calendar = useCalendar(props);
  const modifiers = useModifiers(props, calendar);

  const single = useSingle();
  const multi = useMulti();
  const range = useRange();

  const focus = useFocus();

  const {
    className,
    classNames,
    components: {
      Day,
      DayDate,
      Footer,
      Month,
      MonthCaption,
      Months,
      Nav,
      Week,
      WeekNumber,
      Weekdays
    },
    dataAttributes,
    dateLib,
    dir,
    footer,
    formatters: { formatDay },
    hideNavigation,
    hideWeekdayRow,
    id,
    labels: { labelDay, labelGrid: labelGrid },
    lang,
    locale,
    mode,
    modifiersClassNames,
    modifiersStyles,
    nonce,
    numberOfMonths,
    onDayBlur,
    onDayClick,
    onDayFocus,
    onDayKeyDown,
    onDayKeyPress,
    onDayKeyUp,
    onDayMouseEnter,
    onDayMouseLeave,
    onDayPointerEnter,
    onDayPointerLeave,
    onDayTouchCancel,
    onDayTouchEnd,
    onDayTouchMove,
    onDayTouchStart,
    showWeekNumber,
    style,
    styles,
    title
  } = props;

  const clx = [classNames[UI.Calendar]];
  if (className) {
    clx.push(className);
  }
  if (numberOfMonths > 1) {
    clx.push(classNames[CalendarFlag.has_multiple_months]);
  }
  if (showWeekNumber) {
    clx.push(classNames[CalendarFlag.has_week_numbers]);
  }
  if (hideWeekdayRow) {
    clx.push(classNames[CalendarFlag.no_weekdays]);
  }

  const isInteractive = mode !== undefined || onDayClick !== undefined;

  const sharedProps = {
    calendar,
    context: props
  };

  return (
    <div
      className={clx.join(" ")}
      style={{ ...styles?.[UI.Calendar], ...style }}
      dir={dir}
      id={id}
      lang={lang}
      nonce={nonce}
      title={title}
      {...dataAttributes}
    >
      <Months
        className={classNames[UI.Months]}
        style={styles?.[UI.Months]}
        calendar={calendar}
        props={props}
      >
        {!hideNavigation && (
          // TODO: expand navigation component
          <Nav
            className={classNames[UI.Nav]}
            style={styles?.[UI.Nav]}
            calendar={calendar}
            props={props}
          />
        )}
        {calendar.months.map((month, i) => {
          const captionId = `${id}-caption-${i}`;

          return (
            <Month
              className={classNames[UI.Month]}
              style={styles?.[UI.Month]}
              key={i}
              index={i}
              month={month}
              calendar={calendar}
              props={props}
            >
              <MonthCaption
                className={classNames[UI.MonthCaption]}
                style={styles?.[UI.MonthCaption]}
                id={captionId}
                month={month}
                index={i}
                calendar={calendar}
                props={props}
              />
              <table
                role="grid"
                aria-multiselectable={mode === "multiple" || mode === "range"}
                aria-label={
                  labelGrid(month.date, { locale }, dateLib) || undefined
                }
                className={classNames[UI.MonthGrid]}
                style={styles?.[UI.MonthGrid]}
              >
                <thead>
                  <Weekdays
                    className={classNames[UI.Weekdays]}
                    style={styles?.[UI.Weekdays]}
                    calendar={calendar}
                    props={props}
                  />
                </thead>
                <tbody
                  role="rowgroup"
                  className={classNames[UI.Weeks]}
                  style={styles?.[UI.Weeks]}
                >
                  {month.weeks.map((week, i) => {
                    return (
                      <Week
                        className={classNames[UI.Week]}
                        style={styles?.[UI.Week]}
                        key={week.weekNumber}
                        week={week}
                        aria-rowindex={i + (hideWeekdayRow ? 1 : 2)}
                        calendar={calendar}
                        props={props}
                      >
                        {showWeekNumber && (
                          <WeekNumber
                            className={classNames[UI.WeekNumber]}
                            style={styles?.[UI.WeekNumber]}
                            week={week}
                            calendar={calendar}
                            props={props}
                          />
                        )}
                        {week.days.map((day: CalendarDay, i: number) => {
                          const m = modifiers.getModifiers(day);
                          const { date: d } = day;

                          const handleClick: MouseEventHandler = (e) => {
                            if (m.disabled) {
                              e.preventDefault();
                              e.stopPropagation();
                              return;
                            }

                            switch (mode) {
                              case "single":
                                single.setSelected(d, m, e);
                                break;
                              case "multiple":
                                multi.setSelected(d, m, e);
                                break;
                              case "range":
                                range.setSelected(d, m, e);
                                break;
                            }

                            if (isInteractive && !m.disabled && !m.hidden) {
                              focus.setFocused(day);
                            }

                            onDayClick?.(d, m, e);
                          };

                          const handleFocus: FocusEventHandler = (e) => {
                            if (m.disabled) {
                              e.preventDefault();
                              e.stopPropagation();
                              return;
                            }
                            focus.setFocused(day);
                            onDayFocus?.(d, m, e);
                          };

                          const handleKeyDown: KeyboardEventHandler = (e) => {
                            switch (e.key) {
                              case "ArrowLeft":
                                e.preventDefault();
                                e.stopPropagation();
                                dir === "rtl"
                                  ? focus.focusDayAfter()
                                  : focus.focusDayBefore();
                                break;
                              case "ArrowRight":
                                e.preventDefault();
                                e.stopPropagation();
                                dir === "rtl"
                                  ? focus.focusDayBefore()
                                  : focus.focusDayAfter();
                                break;
                              case "ArrowDown":
                                e.preventDefault();
                                e.stopPropagation();
                                focus.focusWeekAfter();
                                break;
                              case "ArrowUp":
                                e.preventDefault();
                                e.stopPropagation();
                                focus.focusWeekBefore();
                                break;
                              case " ":
                              case "Enter":
                                e.preventDefault();
                                e.stopPropagation();
                                if (mode === "single" && !m.disabled) {
                                  single.setSelected(d, m, e);
                                }
                                if (mode === "multiple" && !m.disabled) {
                                  multi.setSelected(d, m, e);
                                }
                                if (mode === "range" && !m.disabled) {
                                  range.setSelected(d, m, e);
                                }
                                break;
                              case "PageUp":
                                e.preventDefault();
                                e.stopPropagation();
                                e.shiftKey
                                  ? focus.focusYearBefore()
                                  : focus.focusMonthBefore();
                                break;
                              case "PageDown":
                                e.preventDefault();
                                e.stopPropagation();
                                e.shiftKey
                                  ? focus.focusYearAfter()
                                  : focus.focusMonthAfter();
                                break;
                              case "Home":
                                e.preventDefault();
                                e.stopPropagation();
                                focus.focusStartOfWeek();
                                break;
                              case "End":
                                e.preventDefault();
                                e.stopPropagation();
                                focus.focusEndOfWeek();
                                break;
                            }
                            onDayKeyDown?.(d, m, e);
                          };

                          const isAutoFocusTarget =
                            !!focus.autoFocusTarget?.isEqualTo(day);
                          const isFocused = !!focus.focused?.isEqualTo(day);

                          const style = {
                            ...getStyleForModifiers(m, modifiersStyles),
                            ...styles?.[UI.Day]
                          };

                          const className = [
                            classNames[UI.Day],
                            ...getClassNamesForModifiers(
                              m,
                              classNames,
                              modifiersClassNames
                            ),
                            ...(isFocused ? [classNames[DayFlag.focused]] : [])
                          ];

                          return (
                            <Day
                              key={`${format(d, "yyyy-MM-dd")}_${format(day.displayMonth, "yyyy-MM")}`}
                              day={day}
                              modifiers={m}
                              role="gridcell"
                              className={className.join(" ")}
                              style={style}
                              aria-colindex={showWeekNumber ? i + 2 : i + 1}
                              aria-hidden={m.hidden || undefined}
                              aria-selected={m.selected || undefined}
                              calendar={calendar}
                              props={props}
                            >
                              <DayDate
                                className={classNames[UI.DayDate]}
                                style={styles?.[UI.DayDate]}
                                day={day}
                                modifiers={m}
                                disabled={m.disabled || undefined}
                                tabIndex={
                                  isFocused || isAutoFocusTarget ? 0 : -1
                                }
                                aria-label={labelDay(d, m, { locale }, dateLib)} // TODO: use labelDayDate
                                data-day={format(d, "yyyy-MM-dd")}
                                data-month={format(d, "yyyy-MM")}
                                data-selected={m.selected || undefined}
                                data-disabled={m.disabled || undefined}
                                data-hidden={m.hidden || undefined}
                                data-focused={isFocused || undefined}
                                onClick={
                                  isInteractive ? handleClick : undefined
                                }
                                onBlur={(e) => {
                                  focus.blur();
                                  onDayBlur?.(d, m, e);
                                }}
                                onFocus={handleFocus}
                                onKeyDown={handleKeyDown}
                                onKeyPress={(e) => onDayKeyPress?.(d, m, e)}
                                onKeyUp={(e) => onDayKeyUp?.(d, m, e)}
                                onMouseEnter={(e) => onDayMouseEnter?.(d, m, e)}
                                onMouseLeave={(e) => onDayMouseLeave?.(d, m, e)}
                                onPointerEnter={(e) =>
                                  onDayPointerEnter?.(d, m, e)
                                }
                                onPointerLeave={(e) =>
                                  onDayPointerLeave?.(d, m, e)
                                }
                                onTouchCancel={(e) =>
                                  onDayTouchCancel?.(d, m, e)
                                }
                                onTouchEnd={(e) => onDayTouchEnd?.(d, m, e)}
                                onTouchMove={(e) => onDayTouchMove?.(d, m, e)}
                                onTouchStart={(e) => onDayTouchStart?.(d, m, e)}
                                calendar={calendar}
                                props={props}
                              >
                                {formatDay(d, { locale }, dateLib)}
                              </DayDate>
                            </Day>
                          );
                        })}
                      </Week>
                    );
                  })}
                </tbody>
              </table>
            </Month>
          );
        })}
      </Months>
      {footer && (
        <Footer
          className={classNames[UI.Footer]}
          style={styles?.[UI.Footer]}
          calendar={calendar}
          props={props}
        >
          {footer}
        </Footer>
      )}
    </div>
  );
}
